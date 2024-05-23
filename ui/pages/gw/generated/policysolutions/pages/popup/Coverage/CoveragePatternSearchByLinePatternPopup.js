import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CoveragePatternSearchByLinePatternPopup {
	coveragePatternSearchByLinePatternPopupCoveragePatternSearchByLinePatternPopup_UpLink = PcfButton('#CoveragePatternSearchByLinePatternPopup-CoveragePatternSearchByLinePatternPopup_UpLink');
	coveragePatternSearchByLinePatternDVCoverageCategory = PcfSelectInput('#CoveragePatternSearchByLinePatternPopup-CoveragePatternSearchScreen-CoveragePatternSearchByLinePatternDV-CoverageCategory');
	coveragePatternSearchByLinePatternDVKeyword = PcfTextInput('#CoveragePatternSearchByLinePatternPopup-CoveragePatternSearchScreen-CoveragePatternSearchByLinePatternDV-Keyword');
	coveragePatternSearchByLinePatternPopupCoveragePatternSearchScreenCoveragePatternSearchByLinePatternDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#CoveragePatternSearchByLinePatternPopup-CoveragePatternSearchScreen-CoveragePatternSearchByLinePatternDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	coveragePatternSearchByLinePatternPopupCoveragePatternSearchScreenCoveragePatternSearchByLinePatternDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#CoveragePatternSearchByLinePatternPopup-CoveragePatternSearchScreen-CoveragePatternSearchByLinePatternDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	coveragePatternSearchByLinePatternDVSearchType = PcfSelectInput('#CoveragePatternSearchByLinePatternPopup-CoveragePatternSearchScreen-CoveragePatternSearchByLinePatternDV-SearchType');
	coveragePatternSearchScreenCoveragePatternSearchResultsSelectLV = PcfListView('#CoveragePatternSearchByLinePatternPopup-CoveragePatternSearchScreen-CoveragePatternSearchResultsSelectLV');
	coveragePatternSearchByLinePatternPopupCoveragePatternSearchScreen_msgs = PcfButton('#CoveragePatternSearchByLinePatternPopup-CoveragePatternSearchScreen-_msgs');
	coveragePatternSearchByLinePatternPopup_Paging = PcfButton('#CoveragePatternSearchByLinePatternPopup-_Paging');
	coveragePatternSearchByLinePatternPopup__crumb__ = PcfComponent('#CoveragePatternSearchByLinePatternPopup-__crumb__');
}