# Chapter 5 — CPU Parallelism, MPI, and Scaling

## 5.1 Match the request to the program

| How your software works | Slurm allocation to start with | Exoplanet example |
| --- | --- | --- |
| One serial process | One task, one CPU per task | Evaluate one model spectrum |
| One multithreaded process | One task, several CPUs per task on one node | Parallelize a numerical library’s matrix operation |
| Independent runs | Several array elements, each with its own resources | Run injection–recovery trials |
| Processes exchange messages | Several MPI tasks across one or more nodes | An integrator that distributes work through MPI |

Slurm allocates resources. To use them, configure the application’s thread count or launch its parallel ranks. For a single OpenMP process with `#SBATCH --cpus-per-task=4`, use `export OMP_NUM_THREADS="$SLURM_CPUS_PER_TASK"` before running the program. If four Python worker processes each invoke a threaded BLAS library, configure the library to use one thread per process unless you have budgeted additional CPUs. [MIT SuperCloud — Submitting Jobs](https://mit-supercloud.github.io/supercloud-docs/submitting-jobs/)

## 5.2 Use MPI when the application communicates across nodes

MPI programs exchange messages between ranks. Request the number of ranks with `--ntasks` and the number of nodes with `--nodes`. Load the compiler and MPI modules used to build your program and check that your launcher is compatible with that MPI build and the site’s installed Slurm. `srun --mpi=list` lists the available Slurm MPI plugins. Inside a matching allocation, an MPI-enabled build with compatible Slurm integration can be launched with `srun ./my_mpi_program`. Running a serial Python script in multiple Slurm tasks runs copies of that script. [Slurm — MPI Users Guide](https://slurm.schedmd.com/mpi_guide.html) · [MIT SuperCloud — Available Software](https://mit-supercloud.github.io/supercloud-docs/supercloud-software/)

## 5.3 Benchmark before scaling up

Strong scaling keeps total work fixed while increasing resources. If a model grid takes 40 minutes on one CPU and 12 minutes on four, the speedup is 40/12 = 3.33 and the efficiency is 3.33/4 = 83%. Weak scaling keeps the work per worker fixed and asks how runtime changes as both work and resources grow. Time the application separately from queue wait and record the hardware, input size, and resource requests. Verify that the scientific output is consistent across configurations.

Large allocations can spend more time waiting in the queue or saturate shared I/O. Measure time spent reading files, computing, and exchanging data before deciding whether to add CPUs, change the data layout, or split the work differently. [MIT SuperCloud — Resource Limits](https://mit-supercloud.github.io/supercloud-docs/resource-limit-enforcement-and-increases/)
