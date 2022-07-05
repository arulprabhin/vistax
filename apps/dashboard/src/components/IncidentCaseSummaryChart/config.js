export const getOptions = (title) => ({
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'nearest',
      axis: 'y',
    },
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: { display: false },
      },
      y: {
        stacked: true,
      },
    },
  }),
  COLORS = [
    {
      bg: { border: 'rgba(0,143,251,0.9)', color: 'rgba(0,143,251,0.5)' },
      hover: { border: 'rgba(0,143,251,1)', color: 'rgba(0,143,251,0.8)' },
    },
    {
      bg: { border: 'rgba(156, 39, 176,0.9)', color: 'rgba(156, 39, 176,0.5)' },
      hover: { border: 'rgba(156, 39, 176,1)', color: 'rgba(156, 39, 176,0.8)' },
    },
    {
      bg: { border: 'rgba(87, 39, 176,0.9)', color: 'rgba(87, 39, 176,0.5)' },
      hover: { border: 'rgba(87, 39, 176,1)', color: 'rgba(87, 39, 176,0.8)' },
    },
    {
      bg: { border: 'rgba(254,176,25,0.9)', color: 'rgba(254,176,25,0.5)' },
      hover: { border: 'rgba(254,176,25,1)', color: 'rgba(254,176,25,0.7)' },
    },
    {
      bg: { border: 'rgba(0,227,150,0.8)', color: 'rgba(0,227,150,0.3)' },
      hover: { border: 'rgba(0,227,150,1)', color: 'rgba(0,227,150,0.8)' },
    },
    {
      bg: { border: 'rgba(233, 30, 99,0.9)', color: 'rgba(233, 30, 99,0.5)' },
      hover: { border: 'rgba(233, 30, 99,1)', color: 'rgba(233, 30, 99,0.8)' },
    },
    {
      bg: { border: 'rgba(39, 42, 176,0.9)', color: 'rgba(39, 42, 176,0.5)' },
      hover: { border: 'rgba(39, 42, 176,1)', color: 'rgba(39, 42, 176,0.8)' },
    },
    {
      bg: { border: 'rgba(87, 172, 220,0.9)', color: 'rgba(87, 172, 220,0.5)' },
      hover: { border: 'rgba(87, 172, 220,1)', color: 'rgba(87, 172, 220,0.8)' },
    },
  ];
