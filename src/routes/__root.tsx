import { TanStackDevtools } from "@tanstack/react-devtools"
import {
  createRootRoute,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import appCss from "../styles.css?url"
import Navbar from "@/components/navbar"
import { useEffect } from "react"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "XCN/UI",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })
  const shouldShowNavbar = pathname !== "/docs/thingyyy"

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "d") {
        const isDark = document.documentElement.classList.contains("dark")
        const newMode = isDark ? "light" : "dark"

        const updateTheme = () => {
          document.documentElement.classList.remove("light", "dark")
          document.documentElement.classList.add(newMode)
          document.documentElement.setAttribute("data-theme", newMode)
          document.documentElement.style.colorScheme = newMode
          window.localStorage.setItem("theme", newMode)

          window.dispatchEvent(new CustomEvent("theme-changed"))
        }

        if (!document.startViewTransition) {
          updateTheme()
          return
        }

        document.startViewTransition(() => updateTheme())
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <html lang="en" className="dar">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
  var KEY = "__radium_chunk_reload__";
  var hasReloaded = sessionStorage.getItem(KEY) === "1";
  var shouldReload = function (message) {
    return (
      /Failed to fetch dynamically imported module/i.test(message) ||
      /Importing a module script failed/i.test(message) ||
      /Loading chunk [\\d]+ failed/i.test(message)
    );
  };
  var reloadOnce = function () {
    if (hasReloaded) return;
    sessionStorage.setItem(KEY, "1");
    window.location.reload();
  };

  window.addEventListener("error", function (event) {
    var message = (event && event.message) || "";
    if (shouldReload(message)) reloadOnce();
  });

  window.addEventListener("unhandledrejection", function (event) {
    var reason = event && event.reason;
    var message = "";
    if (typeof reason === "string") message = reason;
    else if (reason && typeof reason.message === "string") message = reason.message;
    if (shouldReload(message)) reloadOnce();
  });

  window.addEventListener("pageshow", function () {
    sessionStorage.removeItem(KEY);
  });
})();`,
          }}
        />
      </head>
      <body>
        {shouldShowNavbar ? <Navbar /> : null}
        {/* <Measurer />   */}
        <main className="px-4">{children}</main>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
