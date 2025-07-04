window.BENCHMARK_DATA = {
  "lastUpdate": 1751620842620,
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
          }
        ]
      }
    ]
  }
}