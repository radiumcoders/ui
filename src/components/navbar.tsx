import { Link } from "@tanstack/react-router"
import Container from "./container"
import { Button } from "./ui/button"
import { motion } from "motion/react"

export default function Navbar() {
  const navlinks = [
    { title: "Components", href: "/components" },
    { title: "Blocks", href: "/blocks" },
    { title: "Templates", href: "/templates" },
  ]
  const MotionLink = motion.create(Link)
  return (
    <header className="sticky top-0 z-50 h-20 w-full border-b border-border bg-background/80 backdrop-blur-2xl">
      <Container className="grid h-full grid-cols-[auto_1fr_auto] items-center px-4">
        {/* LEFT */}
        <div className="flex items-center">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* CENTER */}
        <div className="flex items-center justify-center gap-6 font-heading">
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
          <Button variant="outline" className="rounded font-heading">
            Sponsor
          </Button>
          {/*<Button variant="outline" className="rounded font-heading">
            Get Pro
          </Button>*/}
        </div>
      </Container>
    </header>
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
      className="size-10"
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
