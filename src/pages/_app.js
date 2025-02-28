import ContextProvider from "@/context/ContextProvider";
import "@/vendors/animate.min.css";
import "@/vendors/font-awesome.min.css";
import "@/vendors/flaticon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// extra css
import "@/styles/default.css";
import "@/styles/style.css";
import "@/styles/menu.css";
import "@/styles/modalPayment.css";
import "@/styles/subscriptionCard.css";
import "@/styles/skeletonLoader.css";
import "@/styles/loader.css";
import "@/styles/succeed.css";
import "@/styles/gallery-styles.css";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
