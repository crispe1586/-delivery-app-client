export function hasRole (user, roles) {
  if (!user) {
    return false
  } else {
    return roles.some(role => user.roles.includes(role))
  }
}
