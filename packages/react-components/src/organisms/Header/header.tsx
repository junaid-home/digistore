import cls from '@digistore/scss/lib/organisms/Header.module.css'

import * as React from 'react'

import {Input} from '../../atoms'
import {SearchBar, StackedText, Avatar} from '../../molecules'
import {
  LogoIcon,
  CartIcon,
  LikeIcon,
  SearchIcon,
  ProfileIcon,
  CloseIcon,
} from '../../atoms/Icons'

import {HeaderOptions} from './header-types'

function Header({
  categories,
  fullBorder,
  cartItemsCount,
  likesCount,
  totalPrice,
  onSearchQuerySubmit,
  onAccountClick,
  onCartClick,
  onLogoClick,
  onLikesClick,
}: HeaderOptions) {
  const [mobileSearch, setMobileSearch] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState('')

  const handleMobileSearchSubmission: React.FormEventHandler<HTMLFormElement> =
    e => {
      e.preventDefault()

      onSearchQuerySubmit && onSearchQuerySubmit(searchQuery, 'all')
    }

  return (
    <header className={cls.wrapper} style={!fullBorder ? {border: 'none'} : {}}>
      {mobileSearch ? (
        <div className={cls.mobile_search}>
          <form
            onSubmit={handleMobileSearchSubmission}
            className={cls.mobile_search_form}
          >
            <Input
              fullWidth
              placeholder="Search for Products..."
              className={cls.mobile_search_input}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
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
            <LogoIcon onClick={onLogoClick} />
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
                totalCount={cartItemsCount}
                className="lm-xl"
              />
              <LikeIcon
                onClick={onLikesClick}
                totalCount={likesCount}
                className="lm-xl"
              />
              <StackedText
                className="lm-xl"
                label="Total"
                value={`${totalPrice > 0 ? totalPrice : '0.00'}PKR`}
              />
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
        <CartIcon onClick={onCartClick} totalCount={cartItemsCount} />
        <LikeIcon onClick={onLikesClick} totalCount={likesCount} />
        <StackedText
          label="Total"
          value={`${totalPrice > 0 ? totalPrice : '0.00'}PKR`}
        />
      </nav>
    </header>
  )
}

export default Header
