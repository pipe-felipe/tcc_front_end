const MAX_ITEMS_PER_PAGE = 10
const MAX_LEFT = (MAX_ITEMS_PER_PAGE - 1) / 2

const CustomerPagination = ({ limit, total, offset }: any) => {
  const current = offset ? offset / limit + 1 : 1
  const pages = Math.ceil(total / limit)
  const first = Math.max(current - MAX_LEFT, 1)

  return <>{Array.from({ length: MAX_ITEMS_PER_PAGE }).map((_, index) => index + first)}</>
}

export default CustomerPagination
