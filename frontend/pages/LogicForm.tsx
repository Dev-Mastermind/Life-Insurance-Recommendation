import { useState } from "react";
import InsuranceForm from "../components/Form";

export default function LogicForm() {
  const [data, setData] = useState({
    age: "",
    income: "",
    dependents: "",
    risk: "low",
  });
  const [result, setResult] = useState<any>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/recommendation`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const json = await res.json();
      setResult(json);
    } catch (err) {
      console.error("Fetch error:", err);
      setResult({
        recommendation: "Error",
        explanation: "Failed to get recommendation. Please try again.",
      });
    }
  };

  return (
    <InsuranceForm
      data={data}
      result={result}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
