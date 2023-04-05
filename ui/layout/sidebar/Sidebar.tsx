import { SidebarContext } from "#/context/sidebarContext";
import useWindowDimensions from "#/hooks/useWindowDimensions";
import Content from "#/ui/layout/sidebar/Content";
import SearchButton from "#/ui/layout/sidebar/Search";
import Loading from "#/ui/loaders/Loader";
import Image from "next/image";
import VercelLogo from "public/images/vercel.svg";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

function Sidebar() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  /* @ts-ignore */
  const { sidebar, toggleSidebar } = useContext(SidebarContext);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setLoading(true);
    fetch("/api/article")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (width > 1024) {
      if (router.pathname.includes("Docs")) {
        toggleSidebar(true);
        return;
      }
      toggleSidebar(false);
    }
  }, [width, router.pathname]);

  return (
    sidebar && (
      <aside
        style={{ left: "max(0px,calc(50% - 45rem))" }}
        className={`fixed inset-0 top-16 right-auto z-20 flex w-full flex-col overflow-y-auto bg-white/90 px-8 pb-10 text-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 dark:text-white md:w-[19.5rem]`}
      >
        <nav id="nav" className="relative flex-1 py-6 space-y-4 lg:leading-6">
          <SearchButton />
          <ul>
            {!isLoading ? (
              data
                .sort(
                  (a: any, b: any) => a.metadata.position - b.metadata.position
                )
                .map((item: any, index) => (
                  <Content folders={item} key={index}>
                    {item.metadata.title ?? item.name}
                  </Content>
                ))
            ) : (
              <div className="w-full py-6">
                <Loading />
              </div>
            )}
          </ul>
        </nav>
        <div className="flex-none w-full text-sm font-bold text-center dark:text-white">
          <p>
            Built with ❤️ and{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/dishwasher-detergent/CornDocs"
            >
              CornDocs
            </a>
          </p>

          <a
            href="https://vercel.com?utm_source=react-appwrite&utm_campaign=oss"
            className="self-center"
            target="_blank"
          >
            <Image
              src={VercelLogo}
              className="m-auto mt-4"
              alt="Powered by Vercel"
            />
          </a>
        </div>
      </aside>
    )
  );
}

export default Sidebar;
