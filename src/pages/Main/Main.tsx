import React, { useEffect } from "react";

import SupportCardDetailContainer from "../../components/SupportCardDetail";
import UmaListContainer from "../../components/UmaList";
import "./Main.scss";
import UmaDetailContainer from "../../components/UmaDetail";
import { Mixpanel, TRACK } from "../../common/mixpanel";
import CardListView from "../../views/CardList";
import logoImage from "../../img/logo.png";
import donationLogo from "../../img/donation.svg";
import useSelectedCard from "../../components/common/stores/useSelectedCard";
import shallow from "zustand/shallow"

const Main: React.FC = () => {
  const [showUmaPage, showCardPage, uuid] = useSelectedCard(state => [state.showUmaPage, state.showCardPage, state.cardUuid], shallow)

  useEffect(() => {
    Mixpanel.track(TRACK.MAINPAGE, {})
  }, [])

  return (
    <div className={"MainPage"}>
      <div className={"MainPageTitleBar"}>

        <img src={logoImage} className={"titleLogo"} alt={"우마서포터"} />
        {/* <div>우마서포터</div> */}
        <span className={"TitleBarRightItems"}>
          <a className={"donationLink"} href={"https://ko-fi.com/umasupporter"}>
            <img src={donationLogo} className={"donationLogo"} alt={"제작자 후원하기"} />
          </a>
          <a className={"github"} href={"https://github.com/UmaSupporter/umamusume-client"}>
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>깃허브에서 보기</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </span>
      </div>
      <div className={"MainPageContent"}>
        <div className={`UmaListSection ${showUmaPage ? "activated" : ""}`}>
          <UmaListContainer />
        </div>

        <div className={`UmaEventArea _${[showUmaPage, showCardPage].map(x => Number(!x)).reduce((a, b) => a + b)}`}>
          <div className={`UmaEventChoice EventChoice ${!showUmaPage ? "activated" : ""}`}>
            <UmaDetailContainer />
          </div>

          <div className={`CardEventChoice EventChoice ${!showCardPage ? "activated" : ""}`}>
            <SupportCardDetailContainer uuid={uuid} />
          </div>
        </div>
        <div className={`CardListArea ${showCardPage ? "activated" : ""}`}>
          <CardListView />
        </div>
      </div>
    </div>
  )
}

export default Main;
