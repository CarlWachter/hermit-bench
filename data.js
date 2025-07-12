window.BENCHMARK_DATA = {
  "lastUpdate": 1752301416007,
  "repoUrl": "https://github.com/CarlWachter/kernel",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "CarlWachter",
            "username": "CarlWachter",
            "email": "carlwachter@web.de"
          },
          "committer": {
            "name": "CarlWachter",
            "username": "CarlWachter",
            "email": "carlwachter@web.de"
          },
          "id": "8f6424d09d9e0d3d26d19e6915f9651f04a1743d",
          "message": "proper syntax",
          "timestamp": "2025-07-04T09:17:13Z",
          "url": "https://github.com/CarlWachter/kernel/commit/8f6424d09d9e0d3d26d19e6915f9651f04a1743d"
        },
        "date": 1751620841602,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 72.137297723,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.85589599609375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.29499562,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "Startup Time"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "CarlWachter",
            "username": "CarlWachter",
            "email": "carlwachter@web.de"
          },
          "committer": {
            "name": "CarlWachter",
            "username": "CarlWachter",
            "email": "carlwachter@web.de"
          },
          "id": "8f6424d09d9e0d3d26d19e6915f9651f04a1743d",
          "message": "proper syntax",
          "timestamp": "2025-07-04T09:17:13Z",
          "url": "https://github.com/CarlWachter/kernel/commit/8f6424d09d9e0d3d26d19e6915f9651f04a1743d"
        },
        "date": 1751620841685,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "micro_benchmarks Build Time",
            "value": 74.291125239,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9673004150390625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 50.463728,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 25.7618725,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 26.068368,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 60096.15384615385,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 26218.50502084371,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 23155.853365558563,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 40540.54054054054,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 56091.54139555755,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 55733.78756370198,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 46153.846153846156,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 27664.81312418735,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 23423.66082539125,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 41095.890410958906,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 55435.44542380398,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 55884.458881262995,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "startup_benchmark Build Time",
            "value": 72.137297723,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.85589599609375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.29499562,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "Startup Time"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "CarlWachter",
            "username": "CarlWachter",
            "email": "carlwachter@web.de"
          },
          "committer": {
            "name": "CarlWachter",
            "username": "CarlWachter",
            "email": "carlwachter@web.de"
          },
          "id": "3b14bf174a1d882688fc60031522c06d22d974e5",
          "message": "fork version",
          "timestamp": "2025-07-12T06:12:26Z",
          "url": "https://github.com/CarlWachter/kernel/commit/3b14bf174a1d882688fc60031522c06d22d974e5"
        },
        "date": 1752301415792,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 70.851185701,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8764266967773438,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.3306777769599999,
            "unit": "s",
            "range": 0.024780605289231174,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.37799719732000003,
            "unit": "s",
            "range": 0.03861655364145969,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.44679830184,
            "unit": "s",
            "range": 0.055047341070229655,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 64.091122727,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.97674560546875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 97.5294783825845,
            "unit": "%",
            "range": 3.352956642006282,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 44.90054480789842,
            "unit": "%",
            "range": 1.2506151986621497,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 24.96151621806717,
            "unit": "%",
            "range": 0.3523793629888728,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 72.066721599,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.98455810546875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 50.67297952000001,
            "unit": "ticks",
            "range": 0.06453000818851372,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 27.8839233,
            "unit": "ticks",
            "range": 4.585084796652631,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 26.385890279999998,
            "unit": "ticks",
            "range": 0.49478465436498875,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 96197.15095572759,
            "unit": "MByte/s",
            "range": 67149.24866103148,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 90385.80705315586,
            "unit": "MByte/s",
            "range": 67071.46251190484,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 87668.83242602657,
            "unit": "MByte/s",
            "range": 67764.87460990298,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 95414.92642350306,
            "unit": "MByte/s",
            "range": 66605.52868383858,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 91931.2660972794,
            "unit": "MByte/s",
            "range": 68148.3820661539,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 89711.29542962425,
            "unit": "MByte/s",
            "range": 69147.63383896614,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 84336.58306261046,
            "unit": "MByte/s",
            "range": 57976.36559894486,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 93825.13058087045,
            "unit": "MByte/s",
            "range": 68418.28634747352,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 87577.51897661631,
            "unit": "MByte/s",
            "range": 67753.95430662483,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 84140.02286605026,
            "unit": "MByte/s",
            "range": 57841.85672026095,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 95208.14300014969,
            "unit": "MByte/s",
            "range": 69416.11709783072,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 89616.41768750967,
            "unit": "MByte/s",
            "range": 69135.47367889935,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 65.111931542,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.94512939453125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "Allocation success",
            "value": 100,
            "unit": "%",
            "range": 0,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Deallocation success",
            "value": 70.02802774956359,
            "unit": "%",
            "range": 0.32939020711993,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Pre-fail Allocations",
            "value": 100,
            "unit": "%",
            "range": 0,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time",
            "value": 10164.084171284028,
            "unit": "Ticks",
            "range": 427.5735424310458,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 10164.084171284028,
            "unit": "Ticks",
            "range": 427.5735424310458,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 759.08891922839,
            "unit": "Ticks",
            "range": 16.7425684074614,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 65.383931073,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9840927124023438,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 4.999999999999998,
            "unit": "ns",
            "range": 1.7763568394002505e-15,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 41.6,
            "unit": "ns",
            "range": 2.0000000000000004,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          }
        ]
      }
    ]
  }
}