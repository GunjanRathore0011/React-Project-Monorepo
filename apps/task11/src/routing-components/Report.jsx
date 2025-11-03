import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Report = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get('category') || 'all';

    searchParams.set("tab", "2");

    const tab = searchParams.get('tab') || 'all';

    console.log(category);
    console.log(tab)

  return (
    <div>Report</div>
  )
}

export default Report