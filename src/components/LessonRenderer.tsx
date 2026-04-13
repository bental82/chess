import type { Section } from '../content/types';
import Board from './Board';
import ExerciseBoard from './ExerciseBoard';
import MoveStepper from './MoveStepper';
import Markdown from './Markdown';
import Quote from './Quote';

export default function LessonRenderer({ sections }: { sections: Section[] }) {
  return (
    <div className="prose-lesson">
      {sections.map((s, i) => {
        switch (s.kind) {
          case 'prose':
            return <Markdown key={i} source={s.markdown} />;
          case 'quote':
            return <Quote key={i} text={s.text} attribution={s.attribution} source={s.source} />;
          case 'diagram':
            return (
              <Board
                key={i}
                fen={s.fen}
                orientation={s.orientation}
                caption={s.caption}
              />
            );
          case 'walkthrough':
            return (
              <MoveStepper
                key={i}
                fen={s.fen}
                moves={s.moves}
                commentary={s.commentary}
                orientation={s.orientation}
                caption={s.caption}
              />
            );
          case 'exercise':
            return (
              <ExerciseBoard
                key={s.id}
                id={s.id}
                fen={s.fen}
                solution={s.solution}
                hint={s.hint}
                sideToMove={s.sideToMove}
                explanation={s.explanation}
                title={s.title}
              />
            );
        }
      })}
    </div>
  );
}
