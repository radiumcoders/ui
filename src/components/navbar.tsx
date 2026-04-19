import { ListIcon, XIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"
import Container from "./container"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navlinks = [
    { title: "Components", href: "/components" },
    { title: "Docs", href: "/docs" },
    { title: "Blocks", href: "/blocks" },
    { title: "Templates", href: "/templates" },
  ]
  const socialLinks = [
    { title: "Twitter", href: "https://x.com/radiumcoders", external: true },
  ]
  const MotionLink = motion.create(Link)

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("keydown", onEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onEscape)
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 h-16 w-full border-b border-border bg-background/80 backdrop-blur-2xl">
        <Container className="grid h-full grid-cols-[auto_1fr_auto] items-center px-4">
          {/* LEFT */}
          <div className="flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* CENTER */}
          <div className="hidden items-center justify-center gap-6 font-heading md:flex">
            {navlinks.map((item) => (
              <MotionLink
                whileHover={{ opacity: 0.7 }}
                key={item.href}
                to={item.href}
              >
                {item.title}
              </MotionLink>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-end gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <ListIcon size={22} weight="bold" />
            </Button>
            <Button
              variant="outline"
              className={cn(
                "inline-flex h-8 items-center justify-center gap-2 rounded-md",
                "border border-dashed border-primary",
                "bg-muted bg-linear-to-t from-muted to-background",
                "px-2 text-sm font-medium whitespace-nowrap",
                "shadow-md shadow-zinc-950/10",
                "transition-colors duration-200 hover:to-muted",
                "focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none",
                "disabled:pointer-events-none disabled:opacity-50",
                "dark:border-primary/40 dark:from-muted/50 dark:hover:to-muted/50",
                "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
              )}
            >
              Sponsor
            </Button>
            {/* <Button variant="outline" className="rounded font-heading">
            Get Pro
          </Button>*/}
          </div>
        </Container>
      </header>
      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            className="fixed inset-0 z-70 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              className="absolute inset-0 bg-black/20"
              aria-label="Close mobile menu"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.nav
              className="absolute inset-0 flex flex-col bg-background"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
            >
              <div className="flex h-16 items-center justify-between border-b border-border px-4">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Logo />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close mobile menu"
                >
                  <XIcon size={22} weight="bold" />
                </Button>
              </div>

              <div className="flex flex-1 flex-col overflow-y-auto px-6 pt-6 pb-4">
                <div className="flex flex-col border-b border-border pb-6">
                  {navlinks.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="py-3 font-heading text-3xl tracking-tight"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col pt-6">
                  {socialLinks.map((item) =>
                    item.external ? (
                      <a
                        key={item.title}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2 text-lg font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </a>
                    ) : (
                      <a
                        key={item.title}
                        href={item.href}
                        className="py-2 text-lg font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </a>
                    )
                  )}
                </div>
              </div>
              <div className="border-t border-border px-4 py-4">
                <div className="flex flex-col gap-2">
                  <Button
                    className="w-full rounded-lg p-6 font-heading shadow-[inset_0px_0px_10px_0px_#fafafa] dark:shadow-[inset_0px_0px_8px_0px_#171717]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sponsor
                  </Button>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

const Logo = () => {
  return (
    <svg
      width="270"
      height="255"
      viewBox="0 0 270 255"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-10 dark:invert"
    >
      <path
        d="M67.5004 3.08656C36.493 20.9887 13.8672 50.4752 4.60036 85.0594C-4.66646 119.644 0.184795 156.493 18.0869 187.5C35.989 218.507 65.4755 241.133 100.06 250.4C134.644 259.667 171.493 254.816 202.5 236.913L183.833 204.581C161.401 217.532 134.743 221.042 109.723 214.338C84.7028 207.634 63.3708 191.265 50.4196 168.833C37.4683 146.4 33.9587 119.742 40.6628 94.7223C47.3668 69.7024 63.7354 48.3705 86.1676 35.4192L67.5004 3.08656Z"
        fill="#0A0A0A"
      />
      <path
        d="M94.6007 49.785C76.0424 60.4599 62.5006 78.0426 56.9543 98.6651C51.4079 119.287 54.3115 141.26 65.0261 159.75C75.7408 178.24 93.3888 191.731 114.088 197.257C134.787 202.783 156.842 199.89 175.4 189.215L160.015 162.667C148.524 169.276 134.868 171.068 122.052 167.646C109.235 164.225 98.3076 155.871 91.6732 144.422C85.0388 132.974 83.241 119.368 86.6752 106.599C90.1094 93.8301 98.4943 82.9431 109.985 76.3333L94.6007 49.785Z"
        fill="#0A0A0A"
      />
      <path
        d="M165.614 120C165.614 136.569 152.132 150 135.502 150C118.872 150 105.391 136.569 105.391 120C105.391 103.431 118.872 90 135.502 90C152.132 90 165.614 103.431 165.614 120ZM117.419 120C117.419 129.95 125.515 113 135.502 113C145.489 113 153.585 129.95 153.585 120C153.585 110.05 145.489 101.984 135.502 101.984C125.515 101.984 117.419 110.05 117.419 120Z"
        fill="#0A0A0A"
      />
    </svg>
  )
}
