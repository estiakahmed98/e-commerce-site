"use client"
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js"
import { Bar } from "react-chartjs-2"

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

// Mock data - in a real app, this would come from your database
const profitLossData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Revenue",
      data: [1800, 2200, 1900, 2400, 2800, 2600, 3000, 3200, 3500, 3800, 4200, 4500],
      backgroundColor: "rgba(var(--primary), 0.7)",
    },
    {
      label: "Costs",
      data: [1200, 1400, 1300, 1600, 1800, 1700, 1900, 2000, 2200, 2400, 2600, 2800],
      backgroundColor: "rgba(var(--muted-foreground), 0.5)",
    },
    {
      label: "Profit",
      data: [600, 800, 600, 800, 1000, 900, 1100, 1200, 1300, 1400, 1600, 1700],
      backgroundColor: "rgba(var(--success), 0.7)",
    },
  ],
}

export default function AdminProfitLossChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <div className="h-80">
      <Bar data={profitLossData} options={options} />
    </div>
  )
}

