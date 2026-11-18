# Chapter 6 — GPU Jobs on MIT SuperCloud

## 6.1 Request a GPU and verify the environment

SuperCloud documents `volta` as the Slurm GPU type for TX-E1’s V100 nodes. Check the hardware page and your allocation first. Open an interactive session on a GPU compute node for a short device check.

~~~bash
LLsub -i -s 4 -g volta:1
# Run the next commands after the allocation starts
nvidia-smi
exit
~~~

For a batch job, use `#SBATCH --gres=gpu:volta:1` with `#SBATCH --nodes=1` and `#SBATCH --ntasks=1`. Request enough CPU slots to prepare inputs and accommodate host memory. MIT SuperCloud’s node specifications list per-GPU device memory separately from host RAM. [MIT SuperCloud — Submitting Jobs](https://mit-supercloud.github.io/supercloud-docs/submitting-jobs/) · [TX-E1 System Specifications](https://mit-supercloud.github.io/supercloud-docs/systems-and-software/)

## 6.2 Check that your code actually uses the device

Load a compatible software environment inside the allocation. For example, if that environment provides CUDA-enabled PyTorch, test it with the code below. It performs a small calculation on the assigned device.

~~~python
import torch

assert torch.cuda.is_available(), "Check the GPU allocation and PyTorch build"
x = torch.arange(4, device="cuda", dtype=torch.float32)
print(x.device, x.square().sum().item())  # cuda:0 14.0
~~~

## 6.3 Measure a scientific workload end to end

A GPU can help when a code evaluates many spectra or model light curves in batches using a GPU-enabled backend. Compare CPU and GPU wall time for the same model grid and numerical precision. Do a warm-up and synchronize the GPU before reading a timer for asynchronous operations. Include input preparation, device transfers, and output writes in the end-to-end measurement, and verify agreement within the tolerances your analysis needs. Increase batch size gradually while monitoring utilization and memory. A larger allocation helps only if the code can keep it busy. [MIT SuperCloud — Optimizing GPU Jobs](https://mit-supercloud.github.io/supercloud-docs/gpu-jobs/)
