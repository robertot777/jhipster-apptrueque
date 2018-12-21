import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ApptruequeProductoModule } from './producto/producto.module';
import { ApptruequeImagenModule } from './imagen/imagen.module';
import { ApptruequeTruequeModule } from './trueque/trueque.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        ApptruequeProductoModule,
        ApptruequeImagenModule,
        ApptruequeTruequeModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApptruequeEntityModule {}
