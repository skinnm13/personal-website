export const projects = [
  {
    title: "Autonomous Vehicle System",
    dates: "Jan 2026 – Present",
    tags: ["PX4", "C++", "Embedded", "NuttX RTOS", "MAVLink", "Raspberry Pi"],
    bullets: [
      "Autonomous vehicle on FMUK66 with NuttX RTOS for real-time embedded control.",
      "Modular apps using uORB publish–subscribe messaging and MAVLink for distributed integration.",
      "Raspberry Pi integration for high-level sensor processing, camera and ultrasonic obstacle avoidance.",
      "Real-time motor control (ESC + servo) with feedback loops focused on timing constraints.",
    ],
    github: null,
  },
  {
    title: "Portable Ultrasound Device (Capstone)",
    dates: "Sep 2025 – Present",
    tags: ["Embedded", "C", "Signal Processing", "Machine Learning", "MCU"],
    bullets: [
      "Embedded firmware for high-speed ADC data acquisition under real-time constraints.",
      "Real-time signal processing pipelines: filtering, envelope detection, scan conversion.",
      "ML inference for automated detection of clinically relevant patterns in ultrasound data.",
      "End-to-end pipeline optimized for low-latency real-time imaging.",
    ],
    github: "https://github.com/sartajo/Sonolite",
  },
  {
    title: "Optimization Research",
    dates: "Sep 2025 – Dec 2025",
    tags: ["C++", "AVX2/AVX512", "OpenCL", "GPU", "HPC"],
    bullets: [
      "AVX2/AVX512-vectorized sparse matrix kernels with cache-aware tiling and sparsity-driven optimizations.",
      "OpenCL GPU kernels leveraging thread-level parallelism and memory coalescing.",
      "Tuned work-group sizing and kernel occupancy with async command queues to maximize throughput.",
      "Profiled CPU/GPU memory hierarchies to eliminate bottlenecks and propose heterogeneous scaling strategies.",
    ],
    github: null,
  },
  {
    title: "Software Defined Radio System",
    dates: "Jan 2024 – May 2024",
    tags: ["C++", "Python", "GNU Radio", "DSP", "RF"],
    bullets: [
      "Real-time IQ sampling pipelines for RF signal acquisition using GNU Radio.",
      "FFT-based spectral analysis for frequency-domain signal reconstruction.",
      "Custom protocol decoding logic with structured packet parsing and validation.",
      "C++/Python processing modules for low-latency streaming and real-time debugging.",
    ],
    github: null,
  },
  {
    title: "Intro to Computer Vision",
    dates: "Archived",
    tags: ["Python", "Computer Vision"],
    bullets: [
      "First exploration into computer vision concepts and implementations.",
    ],
    github: "https://github.com/skinnm13/Intro-to-Computer-Vision",
  },
  {
    title: "Embedded Systems Visualization Project",
    dates: "2nd Year",
    tags: ["C", "Embedded"],
    bullets: [
      "Embedded system project focused on data visualization from hardware sensors.",
    ],
    github: "https://github.com/skinnm13/Embedded-Systems-Visualization-Project",
  },
];
