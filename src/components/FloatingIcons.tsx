import { Navigation, Car } from "lucide-react";

const FloatingIcons = () => {
  const icons = [
    { Icon: Navigation, delay: "0s", duration: "20s", left: "10%", animationName: "float1" },
    { Icon: Car, delay: "2s", duration: "25s", left: "20%", animationName: "float2" },
    { Icon: Navigation, delay: "4s", duration: "22s", left: "70%", animationName: "float3" },
    { Icon: Car, delay: "1s", duration: "28s", left: "80%", animationName: "float1" },
    { Icon: Navigation, delay: "3s", duration: "24s", left: "40%", animationName: "float2" },
    { Icon: Car, delay: "5s", duration: "26s", left: "60%", animationName: "float3" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map((item, index) => (
        <div
          key={index}
          className="absolute opacity-10"
          style={{
            left: item.left,
            animation: `${item.animationName} ${item.duration} ease-in-out infinite`,
            animationDelay: item.delay,
          }}
        >
          <item.Icon className="w-12 h-12 text-white" />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
