 
import { TranslationService } from "./translation.service";
const translate = new TranslationService;
export const AppConst = {
    "appName": translate.getLocalizedStringCapitalize('appName'),
};