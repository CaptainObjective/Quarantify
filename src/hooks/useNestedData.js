import { useState } from 'react';

import { useCollectionData, useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from 'firebase';

const useNestedData = (fieldNames = [], queryParams = []) => {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let query = firestore().collection(fieldNames[0]);
  for (let params of queryParams) {
    if (params.length === 3) query = query.where(params[0], params[1], params[2]);
  }
  const [value1, loading1, error1] = useCollectionData(query);
  const [value2, loading12, error12] = useCollection(query);
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
      nestedField.forEach((v, i) =>
        newValues.push({ ...value1[i], id: value2?.docs[i]?.id, [fieldNames[1]]: v.data() })
      );
      setValue(newValues);
      setLoading(false);
    })();
  } catch (ex) {
    setError(ex);
  }

  return [value, loading, error];
};

export default useNestedData;
