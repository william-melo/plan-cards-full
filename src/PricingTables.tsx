import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Cards() {
  const plans = [
    {
      name: "Estándar",
      price: "$249.000",
      description: "Ideal para Pymes",
      features: [
        "Gestión avanzada de Turnos",
        "Reportes avanzados",
        "2 Sedes",
        "Llamado de 5.000 turnos mensuales",
        "Incluye 20 usuarios",
      ],
    },
    {
      name: "Pro",
      price: "$549.000",
      description: "Ideal para centros médicos",
      features: [
        "Gestión avanzada de Turnos",
        "Reportes avanzados",
        "4 Sedes",
        "Llamado de 20.000 turnos mensuales",
        "Incluye 50 usuarios",
        "Gestión de citas online",
        "Notificaciones por WhatsApp y SMS",
        "Encuestas de satisfacción",
        "Encuestas de satisfacción",
        "Integraciones*",
        "Soporte gratis",
      ],
    },
    {
      name: "Plus",
      price: "$849.000",
      description: "Para clientes imparables",
      features: [
        "Gestión avanzada de Turnos",
        "Reportes avanzados",
        "Sedes Ilimitadas",
        "Llamado turnos ilimitados",
        "Usuarios Ilimitados",
        "Gestión de citas online",
        "Notificaciones por WhatsApp y SMS",
        "Encuestas de satisfacción",
        "Encuestas de satisfacción",
        "Integraciones*",
        "Soporte gratis",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Escoge Tu Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold mb-4">
                {plan.price}
                <span className="text-sm font-normal">/month</span>
              </p>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Escoger {plan.name}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
