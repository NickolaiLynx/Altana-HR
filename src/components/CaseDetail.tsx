import { useEffect } from "react";
import { Button } from "./ui/button";
import { casesData, serviceNames } from "../data/cases";
import { CaseLayout } from "./layouts/CaseLayout";
import { usePageMeta } from "../hooks/usePageMeta";
import ogImage from "figma:asset/a517b9ade2ca696c966796682c963a0d724ddaf3.png";

interface CaseDetailProps {
  caseId: string;
}

export function CaseDetail({ caseId }: CaseDetailProps) {
  // Находим кейс по ID и определяем его категорию
  let caseItem;
  let category = "";

  if (casesData.recruitment.find((c) => c.id === parseInt(caseId))) {
    caseItem = casesData.recruitment.find((c) => c.id === parseInt(caseId));
    category = serviceNames.recruitment;
  } else if (casesData.audit.find((c) => c.id === parseInt(caseId))) {
    caseItem = casesData.audit.find((c) => c.id === parseInt(caseId));
    category = serviceNames.audit;
  } else if (casesData.migration.find((c) => c.id === parseInt(caseId))) {
    caseItem = casesData.migration.find((c) => c.id === parseInt(caseId));
    category = serviceNames.migration;
  }

  // SEO meta tags for case detail
  usePageMeta({
    title: caseItem ? `${caseItem.title} — Кейсы Алтана` : "Кейс не найден — Алтана",
    description: caseItem?.description || "Кейс не найден",
    keywords: caseItem ? `${caseItem.title}, кейс подбора персонала, ${category}` : "кейсы",
    ogImage: ogImage,
    type: "article",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [caseId]);

  if (!caseItem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4">Кейс не найден</h1>
          <a href="#/cases">
            <Button>Вернуться к кейсам</Button>
          </a>
        </div>
      </div>
    );
  }

  return <CaseLayout caseItem={{ ...caseItem, category }} />;
}
