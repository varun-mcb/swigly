// src/pages/_app.tsx
import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Button,
  createTheme,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { withTRPC } from "@trpc/next";
import type { AppType } from "next/dist/shared/lib/utils";
import Link from "next/link";
import superjson from "superjson";
import type { AppRouter } from "../server/router";

const theme = createTheme();

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Link href="/">
              <Typography variant="h6" sx={{ cursor: "pointer" }}>
                Swigly
              </Typography>
            </Link>
            <div style={{ flex: 1 }}></div>
            <Link href="/cart">
              <Button color="inherit">
                <ShoppingCart fontSize="small" style={{ marginRight: 10 }} />
                Cart
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
