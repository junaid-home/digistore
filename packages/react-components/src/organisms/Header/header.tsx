import cls from '@digistore/scss/lib/organisms/Header.module.css'

import * as React from 'react'
import {Input} from '../../atoms'

import {
  LogoIcon,
  CartIcon,
  LikeIcon,
  SearchIcon,
  ProfileIcon,
  CloseIcon,
} from '../../atoms/Icons'

import {SearchBar, StackedText, Avatar} from '../../molecules'

import {HeaderOptions} from './header-types'

function Header({
  categories,
  fullBorder,
  onSearchQuerySubmit,
  onAccountClick,
  onCartClick,
}: HeaderOptions) {
  const [mobileSearch, setMobileSearch] = React.useState(false)

  return (
    <header className={cls.wrapper} style={!fullBorder ? {border: 'none'} : {}}>
      {mobileSearch ? (
        <div className={cls.mobile_search}>
          <form className={cls.mobile_search_form}>
            <Input
              className={cls.mobile_search_input}
              fullWidth
              placeholder="Search for Products..."
            />
            <CloseIcon
              onClick={() => setMobileSearch(false)}
              className={cls.mobile_search_close_icon}
            />
          </form>
        </div>
      ) : (
        <div className="container center">
          <div className={cls.sidebar}>
            <LogoIcon />
          </div>
          <div
            className={cls.main_area}
            style={fullBorder ? {border: 'none'} : {}}
          >
            <div className={cls.search_bar}>
              <SearchBar
                categories={categories}
                onSearchQuerySubmit={onSearchQuerySubmit}
              />
            </div>
            <nav className={cls.cto_buttons}>
              <Avatar onClick={onAccountClick} />
              <CartIcon
                onClick={onCartClick}
                totalCount={12}
                className="lm-xl"
              />
              <LikeIcon totalCount={9} className="lm-xl" />
              <StackedText className="lm-xl" label="Total" value="1000PKR" />
            </nav>
            <div className={cls.search_cto}>
              <span
                className={cls.search_icon}
                onClick={() => setMobileSearch(true)}
              >
                <SearchIcon color="white" large />
              </span>
              <span className="lm-lg" onClick={onAccountClick}>
                <ProfileIcon />
              </span>
            </div>
          </div>
        </div>
      )}
      <nav className={cls.mobile_nav}>
        <CartIcon onClick={onCartClick} totalCount={12} />
        <LikeIcon totalCount={9} />
        <StackedText label="Total" value="1000PKR" />
      </nav>
    </header>
  )
}

export default Header
