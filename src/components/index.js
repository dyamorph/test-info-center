import HeaderComponent from './HeaderComponent.vue'
import HeroComponent from './HeroComponent.vue'
import ButtonComponent from './ButtonComponent.vue'
import OrderComponent from './OrderComponent.vue'
import OrderStepsComponent from './OrderStepsComponent.vue'
import TextInputComponent from './TextInputComponent.vue'
import RangeInputComponent from './RangeInputComponent.vue'
import AttachFileInputComponent from './AttachFileInputComponent.vue'
import SelectInputComponent from './SelectInputComponent.vue'
import FooterComponent from './FooterComponent.vue'
import OrderHistoryComponent from './OrderHistoryComponent.vue'

const components = [
  { name: 'HeaderComponent', component: HeaderComponent },
  { name: 'HeroComponent', component: HeroComponent },
  { name: 'ButtonComponent', component: ButtonComponent },
  { name: 'OrderComponent', component: OrderComponent },
  { name: 'OrderStepsComponent', component: OrderStepsComponent },
  { name: 'TextInputComponent', component: TextInputComponent },
  { name: 'RangeInputComponent', component: RangeInputComponent },
  { name: 'AttachFileInputComponent', component: AttachFileInputComponent },
  { name: 'SelectInputComponent', component: SelectInputComponent },
  { name: 'FooterComponent', component: FooterComponent },
  { name: 'OrderHistoryComponent', component: OrderHistoryComponent }
]

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  }
}
