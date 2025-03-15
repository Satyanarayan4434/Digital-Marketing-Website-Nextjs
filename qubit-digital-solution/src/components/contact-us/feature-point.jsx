export default function FeaturePoint({ icon, title, description, iconBgColor, iconColor }) {
  return (
    <div className="flex gap-4">
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-full ${iconBgColor} ${iconColor} flex items-center justify-center`}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-base">
          <span className="font-semibold">{title}</span> <span className="text-gray-400">{description}</span>
        </h3>
      </div>
    </div>
  )
}

