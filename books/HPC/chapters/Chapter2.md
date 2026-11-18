# Chapter 2 — Slurm Batch Jobs and Troubleshooting

## 2.1 Submit a small job

Save this as `hello.sh` in the `hpc-lab` directory. Slurm reads the `#SBATCH` directives before executing the shell commands. The example requests one task on one node, with one CPU per task and a five-minute elapsed-time limit.

~~~bash
#!/bin/bash
#SBATCH --job-name=hpc-hello
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --time=00:05:00
#SBATCH --output=logs/%x-%j.out

set -e
printf 'Job %s on %s\n' "$SLURM_JOB_ID" "$(hostname)"
printf 'Working directory: %s\n' "$PWD"
head targets.csv
~~~

~~~bash
cd "$HOME/hpc-lab"
mkdir -p logs
sbatch hello.sh
squeue -u "$USER"
~~~

Create `logs/` before submission because Slurm opens the log before running the script. By default the script starts in the directory from which you submitted it. `sbatch` returns a numeric job ID. In the output filename, `%x` becomes the job name and `%j` becomes the job ID. Open that file once the job starts. Expect the job ID, compute node, and two lines from `targets.csv`. [MIT SuperCloud — Submitting Jobs](https://mit-supercloud.github.io/supercloud-docs/submitting-jobs/) · [Slurm — sbatch](https://slurm.schedmd.com/sbatch.html)

## 2.2 Monitor and diagnose the job

Use `LLstat` or `squeue -u "$USER"` for active jobs. Replace `12345` with the ID printed by `sbatch` when inspecting a particular job. `srun` launches work as a Slurm job step, typically inside an allocation in the examples in this book. `scancel` stops the job and releases its resources. [MIT SuperCloud — Monitoring System and Job Status](https://mit-supercloud.github.io/supercloud-docs/monitoring-system-and-jobs/) · [Slurm — srun](https://slurm.schedmd.com/srun.html)

~~~bash
scontrol show job 12345
# If Slurm accounting is available for your job
sacct -j 12345 --format=JobID,State,ExitCode,Elapsed,AllocCPUS,MaxRSS
# Only if you intend to cancel this job
scancel 12345
~~~

| Symptom | What to inspect |
| --- | --- |
| Pending | Look at the scheduler reason. Priority and unavailable resources call for different responses than an invalid resource request. |
| Failed immediately | Read the log and check the working directory, input paths, environment modules, and exit status. |
| Reached the time limit | Profile a representative case and reduce the work per job or request time within the site limit. |
| Ran out of memory | Review peak memory where reported, then reduce memory use or adjust the CPU-slot request under SuperCloud’s memory policy. |

`MaxRSS` can appear on a job-step row when accounting records it. MIT SuperCloud documents memory as a share of node RAM per allocated CPU slot. Use the site’s current hardware and limits pages when sizing jobs. [MIT SuperCloud — Resource Limits](https://mit-supercloud.github.io/supercloud-docs/resource-limit-enforcement-and-increases/) · [Slurm — sacct](https://slurm.schedmd.com/sacct.html)

## 2.3 Choose between sbatch and LLsub

`sbatch` is Slurm’s submission command. SuperCloud provides `LLsub` for site-specific workflows, including interactive jobs and [Triples mode](#Chapter4). With `LLsub`, a script that contains `#SBATCH` directives uses those options and ignores extra `LLsub` submission arguments. Use the native `sbatch` examples in this chapter as written. [MIT SuperCloud — Submitting Jobs](https://mit-supercloud.github.io/supercloud-docs/submitting-jobs/)
