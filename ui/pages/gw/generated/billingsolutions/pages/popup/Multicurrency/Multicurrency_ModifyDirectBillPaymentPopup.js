import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class Multicurrency_ModifyDirectBillPaymentPopup {
	multicurrency_EditDBPaymentScreenAddItems = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-AddItems');
	multicurrency_EditDBPaymentScreenCancel = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-Cancel');
	multicurrency_EditDBPaymentScreenCollateralItemCardTab = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-CollateralItemCardTab');
	multicurrency_EditDBPaymentScreenCollateralItemLV = PcfListView('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-CollateralItemLV');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenCollateralItemLV_tbAdd = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-CollateralItemLV_tb-Add');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenCollateralItemLV_tbRemove = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-CollateralItemLV_tb-Remove');
	multicurrency_EditDBPaymentScreenDistributionAmountsLV = PcfListView('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-DistributionAmountsLV');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenDistributionAmountsLV_tbAggregate = PcfSelectInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-DistributionAmountsLV_tb-Aggregate');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenDistributionAmountsLV_tbClearButton = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-DistributionAmountsLV_tb-ClearButton');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenDistributionAmountsLV_tbGoButton = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-DistributionAmountsLV_tb-GoButton');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenDistributionAmountsLV_tbGoTo = PcfTextInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-DistributionAmountsLV_tb-GoTo');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenDistributionAmountsLV_tbGroupBy = PcfSelectInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-DistributionAmountsLV_tb-GroupBy');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenDistributionAmountsLV_tbInvoiceSortBy = PcfSelectInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-DistributionAmountsLV_tb-InvoiceSortBy');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenDistributionAmountsLV_tbTAccountOwnerSortBy = PcfSelectInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-DistributionAmountsLV_tb-TAccountOwnerSortBy');
	multicurrency_EditDBPaymentScreenEdit = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-Edit');
	multicurrency_EditDBPaymentScreenExecuteWithoutDistribution = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-ExecuteWithoutDistribution');
	multicurrency_EditDBPaymentScreenFrozenInvoiceItemAlert = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-FrozenInvoiceItemAlert');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenFrozenInvoiceItemAlertCloseBtn = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-FrozenInvoiceItemAlert-CloseBtn');
	multicurrency_EditDBPaymentScreenOverrideModeButton = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-OverrideModeButton');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVAccountName = PcfTextInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-AccountName');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVAccountNumberAccountPicker = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-AccountNumber-AccountPicker');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVAmount = PcfTextInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-Amount');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVAmountAvailableToDistribute = PcfTextInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-AmountAvailableToDistribute');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVCollateralAmount = PcfTextInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-CollateralAmount');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVCreditDistDescription = PcfTextInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-CreditDistDescription');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVDescription = PcfTextInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-Description');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVDistributedAmount = PcfTextInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-DistributedAmount');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVOriginatingAccountName = PcfTextInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-OriginatingAccountName');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVOriginatingUnappliedFunds = PcfTextInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-OriginatingUnappliedFunds');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVPaymentDate = PcfDateValueInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-PaymentDate');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVPaymentInstrumentCreateNewPaymentInstrument = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-PaymentInstrument-CreateNewPaymentInstrument');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVPaymentReceiptInputSetPaymentInstrumentInputSetTokenForACH = PcfTextInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-PaymentReceiptInputSet-PaymentInstrumentInputSet-TokenForACH');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVPaymentReceiptInputSetPaymentInstrumentInputSetTokenForCreditCard = PcfTextInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-PaymentReceiptInputSet-PaymentInstrumentInputSet-TokenForCreditCard');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVPaymentReceiptInputSetPaymentInstrumentInputSetTokenForMisc = PcfTextInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-PaymentReceiptInputSet-PaymentInstrumentInputSet-TokenForMisc');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVPaymentReceiptInputSetPaymentInstrumentInputSetTokenForWire = PcfTextInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-PaymentReceiptInputSet-PaymentInstrumentInputSet-TokenForWire');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVPaymentReceiptInputSetRefNumber = PcfTextInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-PaymentReceiptInputSet-RefNumber');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVRemainingAmount = PcfTextInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-RemainingAmount');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVSuspenseAmount = PcfTextInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-SuspenseAmount');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVUnappliedFunds = PcfSelectInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-UnappliedFunds');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenPaymentDetailsDVUseUnappliedFunds = PcfCheckBox('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-PaymentDetailsDV-UseUnappliedFunds');
	multicurrency_EditDBPaymentScreenSuspenseItemCardTab = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-SuspenseItemCardTab');
	multicurrency_EditDBPaymentScreenSuspenseItemsLV = PcfListView('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-SuspenseItemsLV');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenSuspenseItemsLV_tbAdd = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-SuspenseItemsLV_tb-Add');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_EditDBPaymentScreenSuspenseItemsLV_tbRemove = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-SuspenseItemsLV_tb-Remove');
	multicurrency_EditDBPaymentScreenUpdate = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-Update');
	multicurrency_EditDBPaymentScreen_msgs = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-_msgs');
	multicurrency_EditDBPaymentScreendistributionCardTab = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-distributionCardTab');
	multicurrency_EditDBPaymentScreenincludeOnly = PcfSelectInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-includeOnly');
	multicurrency_EditDBPaymentScreenselectItemsIs = PcfSelectInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-selectItemsIs');
	multicurrency_EditDBPaymentScreenselectItemsWhere = PcfSelectInput('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_EditDBPaymentScreen-selectItemsWhere');
	multicurrency_ModifyDirectBillPaymentPopupMulticurrency_ModifyDirectBillPaymentPopup_UpLink = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-Multicurrency_ModifyDirectBillPaymentPopup_UpLink');
	multicurrency_ModifyDirectBillPaymentPopup_Paging = PcfButton('#Multicurrency_ModifyDirectBillPaymentPopup-_Paging');
	multicurrency_ModifyDirectBillPaymentPopup__crumb__ = PcfComponent('#Multicurrency_ModifyDirectBillPaymentPopup-__crumb__');
}