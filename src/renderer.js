import { EJSRenderer } from './core/template/stories/ejs-renderer';
import { corePartials } from './core/template/stories/partials';
import { accordionPartials } from './component/accordion/template/stories/partials';
import { alertPartials } from './component/alert/template/stories/partials';
import { badgePartials } from './component/badge/template/stories/partials';
import { breadcrumbPartials } from './component/breadcrumb/template/stories/partials';
import { buttonPartials } from './component/button/template/stories/partials';
import { calloutPartials } from './component/callout/template/stories/partials';
import { checkboxPartials } from './component/checkbox/template/stories/partials';
import { connectPartials } from './component/connect/template/stories/partials';
import { contentPartials } from './component/content/template/stories/partials';
import { formPartials } from './component/form/template/stories/partials';
import { highlightPartials } from './component/highlight/template/stories/partials';
import { linkPartials } from './component/link/template/stories/partials';
import { logoPartials } from './component/logo/template/stories/partials';
import { modalPartials } from './component/modal/template/stories/partials';
import { noticePartials } from './component/notice/template/stories/partials';
import { quotePartials } from './component/quote/template/stories/partials';
import { sharePartials } from './component/share/template/stories/partials';
import { skiplinkPartials } from './component/skiplink/template/stories/partials';
import { stepperPartials } from './component/stepper/template/stories/partials';
import { summaryPartials } from './component/summary/template/stories/partials';
import { tabPartials } from './component/tab/template/stories/partials';
import { tagPartials } from './component/tag/template/stories/partials';
import { tilePartials } from './component/tile/template/stories/partials';
import { translatePartials } from './component/translate/template/stories/partials';
import { tooltipPartials } from './component/tooltip/template/stories/partials';
import { transcriptionPartials } from './component/transcription/template/stories/partials';
import { uploadPartials } from './component/upload/template/stories/partials';

const ejsRenderer = new EJSRenderer();

corePartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
accordionPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
alertPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
badgePartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
breadcrumbPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
calloutPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
checkboxPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
connectPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
contentPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
formPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
highlightPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
buttonPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
linkPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
logoPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
modalPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
noticePartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
quotePartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
sharePartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
skiplinkPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
stepperPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
summaryPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
tabPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
tagPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
tilePartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
translatePartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
tooltipPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
transcriptionPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
uploadPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));

export default ejsRenderer;
