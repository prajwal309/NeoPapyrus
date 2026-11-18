# Chapter 1 — Getting Started with MIT SuperCloud

## 1.1 What runs where?

High-performance computing (HPC) helps when a calculation exceeds one machine’s capacity or when many independent calculations would take too long in sequence. MIT SuperCloud’s TX-E1 system is a cluster. You connect to a **login node** to edit scripts, prepare small inputs, inspect results, and launch jobs. Slurm schedules the computation on **compute nodes**. An allocation grants a job CPUs, memory, and, if requested, GPUs. The shared filesystem lets the login and compute nodes see the same project files. [MIT SuperCloud — Getting Started](https://mit-supercloud.github.io/supercloud-docs/getting-started/)

## 1.2 Set up access and connect

Request an account through MIT SuperCloud. Once approved, follow the getting-started guide to create an SSH key and register the **public** key through the TX-E1 portal’s **sshkeys** page. Keep the private key on your machine. Use your assigned SuperCloud username in place of USERNAME. [Requesting an Account](https://mit-supercloud.github.io/supercloud-docs/requesting-account/) · [Account Setup and Login](https://mit-supercloud.github.io/supercloud-docs/getting-started/)

~~~bash
# On your laptop
ssh USERNAME@txe1-login.mit.edu

# On the login node
hostname
pwd
mkdir -p "$HOME/hpc-lab/logs"
exit
~~~

## 1.3 Copy a file and verify it

From your laptop, create a small file and upload it. The remote project directory must already exist.

~~~bash
printf 'target,period_days\nDemo-1,3.2\n' > targets.csv
scp targets.csv USERNAME@txe1-login.mit.edu:hpc-lab/
ssh USERNAME@txe1-login.mit.edu
cd "$HOME/hpc-lab"
head targets.csv
~~~

Use the login shell for quick inspection and submission. For hands-on debugging of a calculation, run `LLsub -i` and wait for the compute allocation. Check `hostname` after it starts and use `exit` to release it. A batch job runs independently of your SSH connection. [MIT SuperCloud — Transferring Files](https://mit-supercloud.github.io/supercloud-docs/transferring-files/) · [MIT SuperCloud — Submitting Jobs](https://mit-supercloud.github.io/supercloud-docs/submitting-jobs/)

Next, submit your first [Slurm batch job](#Chapter2).
