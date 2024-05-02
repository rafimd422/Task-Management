"use client"
import Search, { SearchProps } from 'antd/es/input/Search'

const SearchBox = () => {

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log( info?.source, value);

  return  <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
}

export default SearchBox
