# Chapter 3 — Python Environments, Files, and Reproducibility

## 3.1 Load the same environment in every job

On the login node, run `module avail anaconda` and choose an available module. The module name below appears in SuperCloud’s software guide. Check what your account can load. In batch scripts, initialize the module system and load the chosen version explicitly.

~~~bash
source /etc/profile
module load anaconda/2023a
module list
python --version
python -c 'import sys; print(sys.executable)'
~~~

The exoplanet exercise in Chapters 4 and 7 needs only Python’s standard library. For other work, prepare dependencies once before submission. SuperCloud documents user-space installation with pip and Mamba environments for more complex dependencies. Avoid installing packages from every array element. Save the module name, interpreter version, dependency versions, and input data version alongside the run. If you started in a notebook, move the expensive calculation into a script that takes inputs and an output path. [MIT SuperCloud — Software and Package Management](https://mit-supercloud.github.io/supercloud-docs/software-packages/) · [Converting Jupyter Notebooks to Scripts](https://mit-supercloud.github.io/supercloud-docs/jupyter-notebook-conversion/)

## 3.2 Stage repeated reads on local scratch

Keep inputs and results you need after the job on shared storage. For a large input that the same job reads repeatedly, test staging it on the compute node’s local disk. Inside a scheduled job, SuperCloud sets `TMPDIR`; its contents are removed when the job ends. Create a durable results directory on shared storage and copy final outputs there before exiting. `LLcopy2tmp` copies files and can stage a directory’s immediate files. Pass nested inputs explicitly if needed. [MIT SuperCloud — Using Scratch Space](https://mit-supercloud.github.io/supercloud-docs/llcopy2tmp/)

~~~bash
# Inside a scheduled compute job, from the shared project directory
test -n "$TMPDIR" || exit 1
LLcopy2tmp "$PWD/targets.csv" || exit 1
wc -l "$TMPDIR/targets.csv"
~~~

Measure whether staging pays off. For a tiny CSV, the copy adds overhead. For a larger run, combine small reads or batch many short calculations per task and give each task its own output to reduce shared-filesystem contention. Use the documented `download` partition for large network downloads and have the compute job consume the staged file. [MIT SuperCloud — Filesystem Best Practices](https://mit-supercloud.github.io/supercloud-docs/filesystem/) · [Using the Download Partition](https://mit-supercloud.github.io/supercloud-docs/using-the-download-partition/)
