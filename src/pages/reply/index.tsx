import {
  CompletePage,
  NoSurveyPage,
  SuspendPage,
  WaitingPage,
} from "@/2_pages/reply";
import {
  endpoints,
  FullLayout,
  PageWithLayout,
  useGetQuery,
  useSurveyJoinValidSWR,
} from "@/6_shared";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GiCircularSaw } from "react-icons/gi";

const Page: PageWithLayout = () => {
  const token = useGetQuery<string>("token");
  const { survey } = useSurveyJoinValidSWR(token as string);

  const router = useRouter();

  useEffect(() => {
    if (survey) {
      // 설문 조사 상태가 진행인 경우 응답자 정보 입력 페이지로 이동
      if (survey.status === "PROGRESS") {
        router.replace(endpoints.reply.writeInfo(token, survey));
      }
    }
  }, [survey]);

  if (!survey) {
    return <GiCircularSaw />;
  }

  if (survey.status === "WAITING") {
    return (
      <WaitingPage startDate={survey.startDate} endDate={survey.endDate} />
    );
  }

  if (survey.status === "COMPLETE") {
    return <CompletePage completedDate={survey.completedDate} />;
  }

  if (survey.status === "SUSPENDED") {
    return <SuspendPage suspendedDate={survey.suspendedDate} />;
  }

  return <NoSurveyPage />;
};

Page.getLayout = (page) => <FullLayout>{page}</FullLayout>;

export default Page;
