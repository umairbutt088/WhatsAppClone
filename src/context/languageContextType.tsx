import {ReactNode} from 'react';

export type PropsWithChildren = {children?: ReactNode};

export type LanguageContextType = {
  common: {
    okay?: string;
    back?: string;
    cancel?: string;
    home?: string;
    choose?: string;
    change?: string;
    continue?: string;
    order?: string;
    settings?: string;
    backHome?: string;
    close?: string;
    liveAgent?: string;
    callMeNow?: string;
    somethingWentWrong?: string;
    weAreSorry?: string;
  };
  landingScreen: {
    buttonTitle?: string;
    helpLineText?: string;
    clickCallSupport?: string;
  };
  helpConfirmationScreen: {
    and?: string;
    noButton?: string;
    yesButton?: string;
    helpLineText?: string;
    privacyPolicy?: string;
    pricavyPolicy?: string;
    termsAndConditions?: string;
  };

  addPhoneNumberScreen: {
    callSupport?: string;
    callMeText?: string;
    enterPhoneNumber?: string;
    callToVerifyNumber?: string;
    notificationDetails?: string;
    verifyNumberViaText?: string;
    clickContinueAndOne?: string;
    lianeNowAvailableToHelp?: string;
    whatPhoneNumberAreYouAvailable?: string;
    weDidnotRecognizeThisNumber?: string;
  };

  smsConfirmationScreen: {
    linkTexted?: string;
    linkDetail?: string;
    buttonTitle?: string;
    problemReceivingMessage?: string;
  };

  userConfirmationModel: {
    newNumberAdded?: string;
    numberAddedAndVarified?: string;
  };

  addNameScreen: {
    firstName?: string;
    lastName?: string;
    descriptionText?: string;
  };

  addEmailAddressScreen: {
    descriptionText?: string;
    enterEmailAddress?: string;
  };

  addPaymentMethodScreen: {
    skipForNow?: string;
    securityText?: string;
    paymentMethod?: string;
    descriptionText?: string;
    addPaymentMethod?: string;
  };

  cardConfirmationScreen: {
    cardSavedSuccessfully?: string;
    yourCardSavedSuccessfully?: string;
  };

  cardConfirmationModel: {cardSaved?: string; cardSavedSuccessfully?: string};

  currentLocationScreen: {
    descriptionText?: string;
    alertDescription?: string;
    allowYourLocation?: string;
  };

  welcomeScreen: {
    titleText?: string;
    needHelpText?: string;
    getStartedButton?: string;
    accountReadyToUse?: string;
  };

  dashboard: {
    booking?: string;
    activity?: string;
    weather?: string;
    radio?: string;
    needTaxi?: string;
    needBoquet?: string;
    techsupport?: string;
    reservation?: string;
    comingServices?: string;
    yourCurrentRide?: string;
    viewRideDetails?: string;
    scrollDown?: string;
    listeningNow?: string;
    title?: string;
  };

  destinationAddress: {
    chooseAddress?: string;
    destinationHeading?: string;
    startTypingAddress?: string;
    typeAddressToChoose?: string;
    typeDestinationAddress?: string;
    chooseFromrecentDestinations?: string;
  };

  pickupLocationScreen: {
    confirmPickup?: string;
    confirmButton?: string;
    descroptionText?: string;
    changeAddressButton?: string;
  };

  pickUpAddress: {
    startTypingAddress?: string;
    choosePickUpAddress?: string;
    confirmPickupLocation?: string;
    whereWillTaxiPickYouUp?: string;
    typePickupAddressToSeeOptions?: string;
    chooseToConfirmPickupLocation?: string;
  };

  summeryAddressScreen: {
    price?: string;
    amount?: string;
    orderTaxi?: string;
    almostDone?: string;
    pickUpAddress?: string;
    dropOffAddress?: string;
    surgePriceAmountText?: string;
    makeSureEverythingIsCorrect?: string;
    squireFees?: string;
    noFees?: string;
    addressesAreTooFar?: string;
    pickupAddressIsTooFarFromDestination?: string;
  };

  paymentDetailsScreen: {
    callSupport?: string;
    fullNameOnCard?: string;
    addPaymentMethod?: string;
    enterYourCardDetails?: string;
    creditCardInformation?: string;
    weUseLatestTechnology?: string;
    yourCardWillNotBeCharged?: string;
    settingUpYourPaymentMethod?: string;
    pleaseEnterDifferentNumber?: string;
    weEncounteredPaymentIssue?: string;
  };

  waitingTaxiScreen: {
    cancelTaxi?: string;
    findindYouTaxi?: string;
    findindYouTaxiForRedispatch?: string;
    lookingForAvailableDrivers?: string;
  };

  taxiNotAvailable: {
    tryAgainLater?: string;
    driversAreBusy?: string;
    tryAgainButton?: string;
    backToServices?: string;
  };

  taxiConfirmedScreen: {
    driver?: string;
    adderss?: string;
    carModel?: string;
    callDriver?: string;
    cancelTaxi?: string;
    driverName?: string;
    verifyDriver?: string;
    pickUpAddress?: string;
    carNumberPlate?: string;
    dropOffAddress?: string;
    taxiWillAriveAt?: string;
    TaxiIsconfirmed?: string;
    driverRating?: string;
  };

  cancelTaxi: {
    noKeepMyTaxi?: string;
    wantToCancelTaxi?: string;
    cancelationCharges?: string;
    cancelTaxiWithPenalty?: string;
    taxiWillNotComeToPickYou?: string;
    cancelationChargesAmount?: string;
  };

  cancelTaxiConfirmed: {
    backToServices?: string;
    startNewServices?: string;
    taxiHasBeenCanceled?: string;
    whatDoYouWantToDoNow?: string;
  };

  cancelTaxiWithCost: {
    noKeepMyTaxi?: string;
    doYouWantToCancelTheTaxi?: string;
    yesCancelTaxiWithPenalty?: string;
    taxiWillNotComeToPickYouUp?: string;
  };

  confirmationFroCancelTaxi: {
    yesCancelOrder?: string;
    noKeepMyRide?: string;
    doYouWantToCancelYourOder?: string;
    ifYouCancelTheTaxiWillNotCome?: string;
  };

  taxiDriverCancel: {
    wantToReorderTaxi?: string;
    goBackToServices?: string;
    unfortunatelyYourDriver?: string;
    theyMaybeHavingCarTrouble?: string;
  };

  inTaxiDetails: {
    driver?: string;
    pickUpAddress?: string;
    welcomeOnboard?: string;
    dropOffAddress?: string;
    estimatedPrice?: string;
    youWillArriveAt?: string;
    looksLikeYouAreInCar?: string;
  };

  rideComplete: {
    thankYou?: string;
    finalPrice?: string;
    pickUpAddress?: string;
    dropOffAddress?: string;
    yourRideSummary?: string;
    weTextedYouTheReceipt?: string;
  };

  callSupport: {
    inNext5Mins?: string;
    cancelRequest?: string;
    oneOfOurAgnets?: string;
    iHaveAgentOnLine?: string;
    thanksForContacting?: string;
    freeCall?: string;
    didNotManageConnectYouWithHuman?: string;
  };

  onboardingCallSupport: {
    startButton?: string;
    thanksForContacting?: string;
  };

  cancelOnboardingCallSupport: {
    noWait?: string;
    yesCancel?: string;
    areYouSureYouWantToCancel?: string;
  };

  settings: {
    logout?: string;
    deleteAccount?: string;
    callSupport?: string;
    toUpdateOrChange?: string;
    goBackToServices?: string;
    version?: string;
  };

  logoutConfirmation: {
    yesLogout?: string;
    noKeepMeLogin?: string;
    ifYouLogoutNow?: string;
    areYouSureYouWantToLogout?: string;
  };

  deleteAccountConfirmation: {
    noKeepMeLogin?: string;
    ifYouLogoutNow?: string;
    yesDeleteAccount?: string;
    areYouSureYouWantToDeleteAccount?: string;
  };

  AddressesFarAwayErrorScreen: {
    orderRide?: string;
    sorryItIsTooFar?: string;
    pleaseChangeOneOrBothAddresses?: string;
  };

  ServiceNotAvalibleErrorScreen: {
    enterDifferentAddress?: string;
    squireIsCurrentlyUnavailable?: string;
    weWillSendYouMessageOnceWeOperateInYourArea?: string;
  };
  textInput: {
    PhoneNumberNotvalid?: string;
  };

  deeplinkErrorScreen: {
    SendNewLink?: string;
    weSendYouAnotherOne?: string;
    sendNewVerificationLink?: string;
  };

  LocationPermissionScreen: {
    weNeedToKnowYourLocation?: string;
    allowSquireToUseYourLocation?: string;
  };

  SocketIO: {
    noInternet?: string;
    weFailedToFetchUpdates?: string;
    squireNeedsActiveInternet?: string;
    pleaseCheckYourInternetConnection?: string;
  };

  chooseOccasion: {
    others?: string;
    getWell?: string;
    occasion?: string;
    congrats?: string;
    birthday?: string;
    sympathy?: string;
    anniversary?: string;
  };

  cancelFlowerOrder?: {
    keepOrdering?: string;
    yesCancelOrder?: string;
    wantToCancelOrder?: string;
    flowersWillNotBeSent?: string;
  };

  ChooseSize: {
    size?: string;
    large?: string;
    small?: string;
    medium?: string;
  };

  PreSummaryFlower: {
    titleStart?: string;
    titleEnd?: string;
    price?: string;
    button?: string;
    description?: string;
    squireNeedsAnActiveInternetConnection?: string;
  };

  deliveryMessage: {
    done?: string;
    characters?: string;
    writeYourMessage?: string;
    startTypingMessage?: string;
    continueWithMessage?: string;
  };
  FlowerOrderConfirmed: {
    title?: string;
    description?: string;
    button?: string;
  };
  SetDeliveryAddress: {
    title: string;
    startTypingAddress?: string;
    choosePickUpAddress?: string;
    typePickupAddressToSeeOptions?: string;
    chooseToConfirmPickupLocation?: string;
  };
  AdditionalShippingAddress: {
    apartment?: string;
    recepient_name?: string;
    recepient_phone_number?: string;
  };
  SetDeliveryDate: {
    title?: string;
  };
  FlowerOrderOnTheWay: {
    title?: string;
    description?: string;
    button?: string;
  };

  InactiveService: {
    title?: string;
    description?: string;
  };

  channelGallery: {
    title?: string;
    listen?: string;
    suggest?: string;
  };

  serverError: {
    title?: string;
    description?: string;
    buttonTitle?: string;
    callSupport?: string;
  };

  newsPreferences: {
    title?: string;
    select?: string;
    showMeAllNews?: string;
    savePreference?: string;
    onlyFirstTimeRequired?: string;
    selected?: string;
  };

  newsList: {
    button?: string;
  };

  newsDetail: {
    publishOn?: string;
    clickHere?: string;
    weFailedLoadThisNewsItem?: string;
  };

  addUserSuggestions: {
    servicesTitle?: string;
    radioStationsTitle?: string;
    newsCategoriesTitle?: string;
    servicesTextInputTitle?: string;
    radioStationsTextInputTitle?: string;
    newsCategoriesTextInputTitle?: string;
    textInputPlaceholder?: string;
    servicesTextInputPlaceholder?: string;
    radioStationsTextInputPlaceholder?: string;
    newsCategoriesTextInputPlaceholder?: string;
    description?: string;
    buttonTitle?: string;
  };

  noInternet: {
    title?: string;
    description?: string;
  };

  LiveRadioDetail: {
    weFailedToConnect?: string;
  };

  setLanguage?: (value: string) => void;
};
