import { NgModule } from '@angular/core';

import { Draft99SampleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Draft99SampleSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Draft99SampleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Draft99SampleSharedCommonModule {}
