import {useEffect, useMemo, useState} from 'react';
import forms from '../../config/form.json';
import {FieldElement} from '../../types';

const usePage = () => {
  const [pages, setPages] = useState<FieldElement[][]>([]);

  const components = useMemo(
    () =>
      forms.fields.map(item => {
        let component = Object.values(item)[0];
        component.type = Object.keys(item)[0];
        return component;
      }),
    [],
  );

  useEffect(() => {
    let index = 1;
    let _pages: FieldElement[][] = [];
    while (index < components.length) {
      const pageComponents: FieldElement[] = components.filter(
        item => item.spec.page === index,
      );
      console.log('usePage', index, JSON.stringify(pageComponents, null, 2));

      _pages.push(pageComponents);
      index++;
    }

    setPages(_pages);
  }, [components]);

  return {pages};
};

export default usePage;
