import { useEffect } from "react";
import type {
  FieldValues,
  Path,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

export function useFormPersist<T extends FieldValues>(
  key: string,
  watch: UseFormWatch<T>,
  setValue: UseFormSetValue<T>
) {
  // Load from sessionStorage on mount
  useEffect(() => {
    const data = sessionStorage.getItem(key);
    if (data) {
      try {
        const values = JSON.parse(data);
        Object.keys(values).forEach((k) => {
          setValue(k as Path<T>, values[k]);
        });
      } catch {
        // ignore
      }
    }
  }, [key, setValue]);

  // Save to sessionStorage on change
  useEffect(() => {
    const sub = watch((values) => {
      try {
        sessionStorage.setItem(key, JSON.stringify(values));
      } catch {
        // ignore
      }
    });
    return () => sub.unsubscribe();
  }, [key, watch]);
}
