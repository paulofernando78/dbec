import { PageHeader } from "@/components/content/PageHeader";
import { SequenceNavigation } from "@/components/content/SequenceNavigation";
import { Card } from "@/components/ui/Card";
import { allGrammarTopics, grammarTopicsById, type GrammarTopicId } from "@/data/grammar";
import { GrammarTopic } from "@/features/Grammar";
import { Navigate, useNavigate, useParams } from "react-router";

export default function Grammar() {
  const navigate = useNavigate();
  const { topic: topicId } = useParams();

  if (!topicId) {
    return <Navigate to="/grammar/present-perfect" replace />;
  }

  const topic = grammarTopicsById[topicId as GrammarTopicId];

  if (!topic) {
    return <Navigate to="/grammar/present-perfect" replace />;
  }

  const topicIndex = allGrammarTopics.findIndex((item) => item.id === topic.id);
  const previousTopic = allGrammarTopics[topicIndex - 1];
  const nextTopic = allGrammarTopics[topicIndex + 1];

  return (
    <div>
      <PageHeader title={topic.title} />
      <Card title={topic.title}>
        <p className="mb-4 text-slate-500">{topic.description}</p>
        <GrammarTopic topic={topic} />
      </Card>
      <SequenceNavigation
        previousLabel={previousTopic?.title ?? "Grammar"}
        nextLabel={nextTopic?.title ?? "Grammar"}
        onPrevious={() => navigate(previousTopic ? `/grammar/${previousTopic.id}` : "/grammar/present-perfect")}
        onNext={() => navigate(nextTopic ? `/grammar/${nextTopic.id}` : "/grammar/present-perfect")}
        ariaLabel="Grammar topics"
      />
    </div>
  );
}
