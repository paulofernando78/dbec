import { PageHeader } from "@/components/content/PageHeader";
import { Card } from "@/components/ui/Card";
import { grammarTopicsById, type GrammarTopicId } from "@/data/grammar";
import { GrammarTopic } from "@/features/Grammar";
import { Navigate, useParams } from "react-router";

export default function Grammar() {
  const { topic: topicId } = useParams();

  if (!topicId) {
    return <Navigate to="/grammar/present-perfect" replace />;
  }

  const topic = grammarTopicsById[topicId as GrammarTopicId];

  if (!topic) {
    return <Navigate to="/grammar/present-perfect" replace />;
  }

  return (
    <div>
      <PageHeader title={topic.title} />
      <Card title={topic.title}>
        <p className="mb-4 text-slate-500">{topic.description}</p>
        <GrammarTopic topic={topic} />
      </Card>
    </div>
  );
}
