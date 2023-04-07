import cls from '@digistore/scss/lib/molecules/Search-bar.module.css'

import * as React from 'react'

import {SearchIcon} from '../../atoms/Icons'

import {Button, Input} from '../../atoms'

import DropDown from './dropdown'

import {SearchBarOptions} from './search-bar-types'

function SearchBar({categories, onSearchQuerySubmit}: SearchBarOptions) {
  const [category, setCategory] = React.useState({
    id: '0',
    value: 'all',
    label: 'All Categories',
  })
  const [query, setQuery] = React.useState('')

  const handleSubmit: React.FormEventHandler = e => {
    e.preventDefault()

    onSearchQuerySubmit && onSearchQuerySubmit(query, category.value)
  }

  return (
    <form className={cls.wrapper} onSubmit={handleSubmit}>
      <Input
        placeholder="Search for Products..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <DropDown
        placeholder="English"
        options={categories}
        defaultValue={category}
        onChange={setCategory}
      />
      <Button color="secondary" type="submit">
        <SearchIcon color="white" />
      </Button>
    </form>
  )
}

export default SearchBar
