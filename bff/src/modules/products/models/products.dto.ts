import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ProductsDto {
  @ApiProperty({
    description: 'Name of the product',
    example: 'Samsung Galaxy M51',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Unique Stock Keeping Unit',
    example: 'RZ8NB0AA3FA',
  })
  @IsString()
  sku: string;

  @ApiProperty({
    description: 'Description of the product in HTML format',
    example:
      '<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Monster Durability &amp; Display : Corning Gorilla Glass Victus+, 16.83 Centimeters (6.6"Inch) Super AMOLED Display, FHD+ Resolution with 1080 x 2340 Pixels and 120Hz Refresh Rate  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Monster Processor - Exynos 1380 Processor with Vapour Cooling Chamber | Latest Android 14 Operating System having One UI 6.1 platform | 2.4GHz, 2GHz Clock Speed with Octa-Core Processor  </span></li>...',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Description of the product in HTML format',
    example:
      '<span id="productTitle" class="a-size-large product-title-word-break">        Samsung Galaxy M35 5G (Thunder Grey,6GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber | 6000mAh Battery | 120Hz Super AMOLED Display| without Charger       </span>',
  })
  @IsString()
  short_description: string;
}
