package com.sapo.edu.api.output;

import com.sapo.edu.dto.CategoryDTO;
import lombok.Data;

@Data
public class CategoryOutput extends BaseOutput<CategoryDTO> {

    private String name;

}
