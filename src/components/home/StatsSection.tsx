import { Users, Droplet, Heart, MapPin } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Registered Donors",
    description: "Active blood donors ready to help",
  },
  {
    icon: Droplet,
    value: "25,000+",
    label: "Blood Units",
    description: "Successfully donated and distributed",
  },
  {
    icon: Heart,
    value: "50,000+",
    label: "Lives Saved",
    description: "Through our donor network",
  },
  {
    icon: MapPin,
    value: "100+",
    label: "Cities Covered",
    description: "Nationwide presence",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative bg-background/5 backdrop-blur-sm rounded-2xl p-8 border border-background/10 hover:bg-background/10 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              
              {/* Value */}
              <h3 className="text-4xl font-bold text-background mb-2">
                {stat.value}
              </h3>
              
              {/* Label */}
              <p className="text-lg font-semibold text-background/90 mb-1">
                {stat.label}
              </p>
              
              {/* Description */}
              <p className="text-sm text-background/60">
                {stat.description}
              </p>
              
              {/* Decorative Line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
