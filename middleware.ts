export { default } from "next-auth/middleware"

export const config = { 
  matcher: [
    "/submit-boat",
    "/dashboard/trips",
    "/dashboard/favorites",
    "/dashboard/reservations"
  ]
};