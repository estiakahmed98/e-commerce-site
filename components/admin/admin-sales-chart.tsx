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
import { Line } from "react-chartjs-2"

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

// Mock data - in a real app, this would come from your database
const salesData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Sales 2023",
      data: [1800, 2200, 1900, 2400, 2800, 2600, 3000, 3200, 3500, 3800, 4200, 4500],
      borderColor: "hsl(var(--primary))",
      backgroundColor: "rgba(var(--primary), 0.1)",
      tension: 0.4,
    },
    {
      label: "Sales 2022",
      data: [1500, 1800, 1600, 2000, 2200, 2100, 2400, 2600, 2800, 3000, 3300, 3600],
      borderColor: "hsl(var(--muted-foreground))",
      backgroundColor: "transparent",
      borderDash: [5, 5],
      tension: 0.4,
    },
  ],
}

export default function AdminSalesChart() {
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
      <Line data={salesData} options={options} />
    </div>
  )
}

