import { Contribution, GithubResponse } from '@/types/github-response';
import axios, { AxiosResponse } from 'axios';
import dayjs from 'dayjs';
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

const flattenContributions = (data: GithubResponse): Contribution[] => {
  return Object.values(data.contributions)
    .flatMap(year =>
      Object.values(year)
        .flatMap(month =>
          Object.values(month)
        )
    );
};

export const githubContribution = async (): Promise<number> => {
  const todayThisYear = dayjs().format('YYYY-MM-DD');
  const todayLastYear = dayjs().subtract(1, 'year').add(1, "day").format("YYYY-MM-DD");
  const thisYear = todayThisYear.slice(0, 4);
  const lastYear = todayLastYear.slice(0, 4);

  const githubContributionUrl = `https://github-contributions-api.jogruber.de/v4/JFKongphop?format=nested&y=${lastYear}&y=${thisYear}`;
  const { data }:AxiosResponse<GithubResponse> = await axios.get(githubContributionUrl);

  const contributions = flattenContributions(data);

  const filterContributionDate = contributions.filter(({ date }) => dayjs(date).isBetween(
    todayThisYear, 
    todayLastYear, 
    "day", 
    "[]"
  ));

  const sumContributions = filterContributionDate.reduce((sum, { count}) => sum + count, 0);

  return sumContributions
}