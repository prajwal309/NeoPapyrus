# Chapter 4 — Job Arrays and LLsub Triples

## 4.1 Split work into independent chunks

Suppose you want to test a synthetic radial-velocity signal over a grid of trial periods. Each period can be evaluated independently. A Slurm array schedules several copies of one script, each with a different `SLURM_ARRAY_TASK_ID`. Group related cases into each task so that startup and file I/O take a small fraction of the runtime. Set a concurrency limit with `%`: the example below has four tasks and lets at most two run at once. [MIT SuperCloud — Submitting Jobs](https://mit-supercloud.github.io/supercloud-docs/submitting-jobs/) · [Slurm — Job Arrays](https://slurm.schedmd.com/job_array.html)

Save this as `periods.sh` in the same directory as `period_grid.py` from [Chapter 7](#Chapter7).

~~~bash
#!/bin/bash
#SBATCH --job-name=rv-grid
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --array=0-3%2
#SBATCH --time=00:05:00
#SBATCH --output=logs/%x-%A_%a.out

set -e
source /etc/profile
module load anaconda/2023a
# Keep the original grid split when resubmitting an individual index.
chunk_count=4
output_dir="${1:-results/$SLURM_ARRAY_JOB_ID}"
python period_grid.py "$SLURM_ARRAY_TASK_ID" "$chunk_count" "$output_dir"
~~~

Create `logs/` and submit with `sbatch periods.sh`. `%A` is the array job ID and `%a` is the task index in the log. Each task writes its own shard in the array's results directory. If task 2 fails, wait for the original array to finish, repair the cause, and resubmit just that index. With 12345 as the original array ID, use:

~~~bash
sbatch --array=2 periods.sh results/12345
~~~

The retry gets its own log and writes into the original results directory. It keeps the four-way split even though only one element is scheduled. After the retry completes, run the reducer from [Chapter 7](#Chapter7). If you changed the model or inputs, submit a fresh full array so all shards use the same analysis.

<div data-level="301">

## 4.2 Pack large workloads with LLsub Triples

On SuperCloud, Triples specifies `[nodes,processes_per_node,threads_per_process]` for a whole-node allocation. It can reduce startup overhead for large batches of independent work. Use a separate executable launcher without `#SBATCH` lines and pass the arguments documented for Triples. Replace the Slurm array index and count with `LLSUB_RANK` and `LLSUB_SIZE`. Each rank can process a chunk of cases. Choose the resource shape from the node type and the limits on your account. [MIT SuperCloud — Job Array Triples](https://mit-supercloud.github.io/supercloud-docs/job-array-triples/)

~~~bash
# Generic invocation from the SuperCloud guide. Supply three integer counts.
chmod u+x submit_triplessweep.sh
LLsub ./submit_triplessweep.sh '[NODES,NPPN,NTPP]'
~~~

A launcher for the period-grid exercise would call `python period_grid.py "$LLSUB_RANK" "$LLSUB_SIZE" "$RUN_OUTPUT_DIR"`, with `RUN_OUTPUT_DIR` set to a unique shared output directory before submitting. For the four tiny tasks above, the small Slurm array is sufficient.

</div>
