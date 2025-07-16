// components/Form.tsx
import styles from "../styles/InsuranceForm.module.css";

interface FormProps {
  data: {
    age: string;
    income: string;
    dependents: string;
    risk: string;
  };
  result: any;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function InsuranceForm({
  data,
  result,
  onChange,
  onSubmit,
}: FormProps) {
  return (
    <div className={styles.insuranceContainer}>
      <h1 className={styles.insuranceTitle}>Life Insurance Recommendation</h1>
      <form onSubmit={onSubmit} className={styles.insuranceForm}>
        <input
          type="number"
          name="age"
          placeholder="Age"
          required
          value={data.age}
          onChange={onChange}
          className={styles.insuranceInput}
        />
        <input
          type="number"
          name="income"
          placeholder="Income"
          required
          value={data.income}
          onChange={onChange}
          className={styles.insuranceInput}
        />
        <input
          type="number"
          name="dependents"
          placeholder="Number of Dependents"
          required
          value={data.dependents}
          onChange={onChange}
          className={styles.insuranceInput}
        />
        <select
          name="risk"
          value={data.risk}
          onChange={onChange}
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
