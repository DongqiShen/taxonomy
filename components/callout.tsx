import { cn } from "@/lib/utils"

interface CalloutProps {
  icon?: string
  children?: React.ReactNode
  type?: "default" | "warning" | "danger"
}

export function Callout({
  children,
  icon,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 flex items-start rounded-md p-4",
        {
          "bg-red-50 dark:bg-red-900": type === "danger",
          "bg-yellow-50 dark:bg-yellow-900": type === "warning",
        },
        "text-gray-900 dark:text-gray-100" // 默认文本颜色
      )}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
