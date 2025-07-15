import { useState } from "react";
import styles from "../styles/InsuranceForm.module.css";

export default function InsuranceForm() {
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
    <div className={styles.insuranceContainer}>
      <h1 className={styles.insuranceTitle}>Life Insurance Recommendation</h1>
      <form onSubmit={handleSubmit} className={styles.insuranceForm}>
        <input
          type="number"
          name="age"
          placeholder="Age"
          required
          value={data.age}
          onChange={handleChange}
          className={styles.insuranceInput}
        />
        <input
          type="number"
          name="income"
          placeholder="Income"
          required
          value={data.income}
          onChange={handleChange}
          className={styles.insuranceInput}
        />
        <input
          type="number"
          name="dependents"
          placeholder="Number of Dependents"
          required
          value={data.dependents}
          onChange={handleChange}
          className={styles.insuranceInput}
        />
        <select
          name="risk"
          value={data.risk}
          onChange={handleChange}
          className={styles.insuranceSelect}
        >
          <option value="low">Low Risk</option>
          <option value="medium">Medium Risk</option>
          <option value="high">High Risk</option>
        </select>
        <button type="submit" className={styles.insuranceButton}>
          Get Recommendation
        </button>
      </form>

      {result && (
        <div className={styles.insuranceResultBox}>
          <h2 className={styles.insuranceResultTitle}>Recommendation:</h2>
          <p>{result.recommendation}</p>
          <p className={styles.insuranceResultExplanation}>
            {result.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
