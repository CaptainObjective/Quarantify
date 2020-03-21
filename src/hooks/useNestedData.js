import { useState } from 'react';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from 'firebase';

const useNestedData = (fieldNames = []) => {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [value1, loading1, error1] = useCollectionData(firestore().collection(fieldNames[0]));

  try {
    (async () => {
      if (!value1) return;
      if (value1.length === value?.length) return;
      const promises = [];
      for (let doc of value1) {
        promises.push(doc[fieldNames[1]].get());
      }
      let nestedField = await Promise.all(promises);
      const newValues = [];
      nestedField.forEach((v, i) => newValues.push({ ...value1[i], [fieldNames[1]]: v.data() }));
      setValue(newValues);
      setLoading(false);
    })();
  } catch (ex) {
    setError(ex);
  }

  return [value, loading, error];
};

export default useNestedData;
